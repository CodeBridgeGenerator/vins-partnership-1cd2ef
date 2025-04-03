
    module.exports = function (app) {
        const modelName = 'case_documents';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            caseNo: { type: Schema.Types.ObjectId, ref: "accident_cases" },
user: { type:  String , required: true },
fileName: { type:  String , required: true },
fileType: { type:  String , required: true },
storagePath: { type:  String , required: true },
extractedContent: { type:  String , required: true },
uploadTimestamp: { type: Date, required: false },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };