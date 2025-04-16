
    module.exports = function (app) {
        const modelName = 'text_extraction_queues';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            caseDocumentId: { type: Schema.Types.ObjectId, ref: "case_documents" },
documentStorageId: { type: Schema.Types.ObjectId, ref: "case_documents" },
documentType: { type:  String , required: true },
caseNo: { type: Schema.Types.ObjectId, ref: "accident_cases" },

            
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