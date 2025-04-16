
    module.exports = function (app) {
        const modelName = 'case_documents';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            caseNo: { type: Schema.Types.ObjectId, ref: "accident_cases" },
extractedContent: { type:  String , required: true, maxLength: null },
uploadTimestamp: { type: Date, required: false },
uploadedDocument: { type:  [Schema.Types.ObjectId], ref: "document_storages" , required: true, maxLength: null },

            
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