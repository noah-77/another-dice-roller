<template>
    <div>
        <canvas id="diceCanvas"></canvas>
    </div>
</template>

<script>
import vertices from "@/Components/3dRender/vertices.js";
import {mat4} from "gl-matrix";
import { create, perspective, rotateX, rotateY, multiply, translate, scale } from "gl-matrix/mat4";



export default {
    name: "RenderDice",

    data() {
        return {
            vertices: vertices,
        }
    },

    mounted() {
        this.init()
    },

    methods: {
        // Function to create and compile a shader
        createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (success) {
                return shader;
            }

            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
        },

        // Function to create and link a program
        createProgram(gl, vertexShader, fragmentShader) {
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);

            const success = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (success) {
                return program;
            }

            console.error(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
        },

        init() {
            const canvas = document.getElementById('diceCanvas');
            const gl = canvas.getContext('webgl');

            // Define the vertex shader
            const vertexShaderSource = `
      attribute vec3 a_position;
      uniform mat4 u_modelViewProjectionMatrix;

      void main() {
        gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);
      }
    `;
            // Define the fragment shader
            const fragmentShaderSource = `
      precision mediump float;

      void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    `;

            // Create and compile the shaders
            const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
            const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

            // Create and link the shader program
            const program = this.createProgram(gl, vertexShader, fragmentShader);

            // Get the attribute and uniform locations
            const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
            const modelViewProjectionUniformLocation = gl.getUniformLocation(program, 'u_modelViewProjectionMatrix');

            // Create the buffer for the dice vertices
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            // Set the dice vertices in the buffer
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

            // Create the element buffer for the dice indices
            const indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

            // Define the dice indices
            const indices = [
                0, 1, 2, 0, 2, 3,       // Front face
                4, 5, 6, 4, 6, 7,       // Back face
                8, 9, 10, 8, 10, 11,    // Top face
                12, 13, 14, 12, 14, 15, // Bottom face
                16, 17, 18, 16, 18, 19, // Right face
                20, 21, 22, 20, 22, 23  // Left face
            ];

            // Set the dice indices in the buffer
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

            // Enable the vertex attribute array
            gl.enableVertexAttribArray(positionAttributeLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

            // Clear the canvas
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            // Use the shader program
            gl.useProgram(program);

            // Create the perspective matrix
            const aspect = canvas.clientWidth / canvas.clientHeight;
            const fieldOfView = 45 * Math.PI / 180;
            const zNear = 0.1;
            const zFar = 100;

            const projectionMatrix = perspective(fieldOfView, aspect, zNear, zFar);
            const modelViewMatrix = create();
            rotateX(modelViewMatrix, modelViewMatrix, 0.01);
            rotateY(modelViewMatrix, modelViewMatrix, 0.01);
            const modelViewProjectionMatrix = create();
            multiply(modelViewProjectionMatrix, projectionMatrix, modelViewMatrix);


            // Set the model-view-projection matrix uniform
            gl.uniformMatrix4fv(modelViewProjectionUniformLocation, false, modelViewProjectionMatrix);

            // Draw the dice
            gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
        }
    }
}


</script>

<style scoped>
#diceCanvas {
    width: 400px;
    height: 400px;
}
</style>


<!--In this code, we start by creating a WebGL context and obtaining the shader source code for the vertex and fragment shaders. We then compile and link the shaders to create a shader program.-->

<!--Next, we define the dice vertices and indices and create buffers to store them. We enable the vertex attribute array and bind the position buffer to it. We also set the clear color and clear the canvas.-->

<!--The perspective matrix and model-view matrix are created using the mat4 library functions. We rotate the model-view matrix to animate the dice. Then, we combine the projection and model-view matrices into the model-view-projection matrix and set it as a uniform in the shader program.-->

<!--Finally, we draw the dice using the drawElements function, specifying the number of indices to render.-->

<!--The functions createShader and createProgram are utility functions to compile shaders and create shader programs, respectively.-->

<!--Please note that while this code demonstrates the use of WebGL directly, it is a simplified example and may not cover all aspects of a production-ready application.-->
