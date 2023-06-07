import { TestBed } from '@angular/core/testing';

import { ElaborationService } from './elaboration.service';

describe('ElaborationService', () => {
  let service: ElaborationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElaborationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fromStringToArrayOfNumbers should create an array of numbers', ()=> {
    expect(service.fromStringToArrayOfNumbers('1 2 3 nel castello ci sta il re 2.33.4 3.33 4.01 &%')).toEqual([1, 2, 3, 3.33, 4.01])
  })

  it('filterAnomalies should return [3, 3, 3, 3.33, 4.01 , 5 , 6 ,6, 6]', ()=>{
    expect(service.filterAnomalies([1, 2, 3, 3.33, 4.01 , 5 , 6 ,7, 8], 3, 6)).toEqual([3, 3, 3, 3.33, 4.01 , 5 , 6 ,6, 6])
  })

  it('keepEven should keep only even number', ()=>{
    expect(service.keepEven([1,2,3,4])).toEqual([2,4])
  })
});
