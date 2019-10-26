import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigatedataService {

  private paramData: any
  private jobId: any;

  constructor() { }

  setParamData(data) {
    this.paramData = data
  }

  getParamData() {
    return this.paramData
  }
  setJobId(jobid) {
    this.jobId = jobid
  }
  getJobId() {
    return this.jobId;
  }
}
