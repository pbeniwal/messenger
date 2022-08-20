var config = {

	"Region" : "REPLACE_WITH_LAB_REGION",

	"Cognito" : {
		"IdentityPoolId": "REPLACE_WITH_COGNITO_IDENTITY_POOL_ID"
	},

	"SQS" : {
		"Standard" : {
			"QueueUrl" : "REPLACE_WITH_QUEUE_URL_1"
		},
		"Secondary" : {
			"QueueUrl" : "REPLACE_WITH_QUEUE_URL_2"
		},
		"Tertiary" : {
			"QueueUrl" : "REPLACE_WITH_QUEUE_URL_3"
		},
		"FIFO" : {
			"QueueUrl" : "REPLACE_WITH_QUEUE_URL_FIFO",
			"GroupId" : "microservices_sqs_fifo"
		}
	},

	"SNS" : {
		"TopicARN" : "REPLACE_WITH_SNS_TOPIC_ARN"
	},

	"Kinesis" : {
		"StreamName" 		: "microservicesDrawingData",
		"PartitionKey"	: "Partition1"
	},

	"IoT" : {
		"Endpoint" : "REPLACE_WITH_IOT_ENDPOINT",
		"Topic" : "microservices/drawingdemo"
	}
}
