# Build a messaging translation assistant with the AWS Translate service, hosted on Vercel

This repo follows the original blueprint, but removing the need for a local node.js server. That part is done through a serverless function in Vercel, where the rest of the client-side is also hosted. 

You will need to create these environment variables on your Vercel project:

![image](https://github.com/DOAGenesys/digital-messaging-translator-blueprint/assets/119416710/72dc6052-553e-4935-8cc0-56f8b75d3c67)

On Genesys Cloud, you will need OAuth implicit grant credentials. In them, include the URL of your web app within "Authorized redirect URIs"

Also, create an interaction widget with an application URL like this one:

https://[webAppURL]/?language={{gcLangTag}}&gcTargetEnv={{gcTargetEnv}}&gcHostOrigin={{gcHostOrigin}}&conversationId={{gcConversationId}}

The application will auto detect the language of both the customer and the agent (the agent's one depends on GC language settings)

> View the full [Genesys Cloud Messaging Translator Blueprint](https://developer.mypurecloud.com/blueprints/digital-messaging-translator-blueprint/ "Goes to the digital-messaging-translator-blueprint repo") in the Genesys Cloud Developer Center.
