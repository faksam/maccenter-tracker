import * as mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  job_card_no: String,
  customer_name: String,
  phone_no: String,
  customer_address: String,
  email: String,
  date_registion: Date,
  serial_no: String,
  machine_type: String,
  device_details: String,
  fault_reported: String,
  other_details: String,
  registered_by: String,
  engineer_in_charge: String,
  date_for_collection: String,//Should be Date
  status: String,
});

const Device = mongoose.model('Device', deviceSchema);

export default Device;
