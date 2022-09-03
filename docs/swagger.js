const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

const swaggerDefinition ={
    openapi: "3.0.0",
    info:{
        title:"Documentacion de mi API curso de NODE Rest",
        version:"1.0.0"
    },
    servers:[
        {
            url:"http://localhost:3001/api"
        }
    ]
}

/**
 * Opciones
 */
const options = {
    
    swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
}

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration