
    const schema = {
  "asyncapi": "2.6.0",
  "info": {
    "title": "Streetlights APIs January 8",
    "version": "1.0.0",
    "description": "The Smartylighting Streetlights API allows you\nto remotely manage the city lights.\n",
    "license": {
      "name": "Apache 2.0",
      "url": "https://www.apache.org/licenses/LICENSE-2.0"
    }
  },
  "servers": {
    "mosquitto": {
      "url": "mqtt://test.mosquitto.org",
      "protocol": "mqtt"
    }
  },
  "channels": {
    "light/measured": {
      "publish": {
        "summary": "Inform about environmental lighting conditions for a particular streetlight.",
        "operationId": "onLightMeasured",
        "message": {
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "minimum": 0,
                "description": "Id of the streetlight.",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "lumens": {
                "type": "integer",
                "minimum": 0,
                "description": "Light intensity measured in lumens.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "sentAt": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time when the message was sent.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "<anonymous-message-1>"
        }
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  