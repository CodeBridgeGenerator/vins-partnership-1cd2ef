
    module.exports = function (app) {
        const modelName = 'ground_truth_queues';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            caseDocumentId: { type: Schema.Types.ObjectId, ref: "case_documents" },
caseNo: { type: Schema.Types.ObjectId, ref: "accident_cases" },
status: { type:  String , required: true },
errorMessage: { type:  String , required: true },

            
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