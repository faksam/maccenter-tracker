import Device from '../models/device';
import BaseCtrl from './base';

export default class DeviceCtrl extends BaseCtrl {
  model = Device;

    // Get by job-order-no
    track = (req, res) => {
      this.model.findOne({ job_card_no: req.body.job_order_no }, (err, device) => {
        console.log("in Device");
        //console.log(req.job_card_no);
        //console.log(req.body.deviceJobNo.job_card_no);
        console.log(req.body.job_order_no);
        console.log(device);
        // console.log(req.params.deviceJobNo.job_card_no);
        // console.log(req.params.job_card_no);
        if (err) { return console.error(err); }
        res.status(200).json(device);
      });
    }
  
}
