
    module.exports = function (app) {
        const modelName = 'accident_cases';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            insuranceRef: { type:  String , required: true },
caseNo: { type:  String , required: true },
court: { type:  String , required: true },
plaintiffSolicitors: { type:  String , required: true },
plaintiff: { type:  String , required: true },
insuredDriver: { type:  String , required: true },
insured: { type:  String , required: true },
insuredVehicle: { type:  String , required: true },
collisionDateTime: { type: Date, required: false },
claimStatus: { type:  String , required: true },
user: { type: Schema.Types.ObjectId, ref: "users" },
synonyms: { type:  String , required: true },
parameters: { type:  String , required: true },

            
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