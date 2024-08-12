// import { TestBed } from '@angular/core/testing';
// import { CalcService } from './calc.service';
// import { HomeComponent } from './components/home/home.component';
// import { DataService } from './data.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { USERS } from './mock_data/user';

// describe("AppComponent Test Suite", () => {
//   let home: HomeComponent;
//   let calc: CalcService;
//   let data: DataService;
//   let testingController: HttpTestingController;

//   beforeEach(() => {
//     console.log("before each method");
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [HomeComponent, CalcService, DataService]
//     });

//     home = TestBed.inject(HomeComponent);
//     calc = TestBed.inject(CalcService);
//     data = TestBed.inject(DataService);
//     testingController = TestBed.inject(HttpTestingController);
//   });

//   it("should multiply numbers using CalcService", () => {
//     const result = calc.multiply(4, 5);
//     expect(result).toBe(20);
//   });

//   it("should add numbers using HomeComponent", () => {
//     const result = home.addNumbers(2, 3);
//     expect(result).toBe(5);
//   });

//   // Uncomment and fix the following tests as needed
//   // it("should spy on the getData method of CalcService", () => {
//   //   const spyMethod = spyOn(calc, 'getData').and.returnValue('fake data');
//   //   const result = calc.getData();
//   //   expect(spyMethod).toHaveBeenCalled();
//   //   expect(result).toBe("fake data");
//   // });

//   // it("should spy on the atmethod of CalcService", () => {
//   //   const spyMethod = spyOn(calc, 'atmethod').and.returnValue('original value');
//   //   const result = calc.atmethod();
//   //   expect(spyMethod).toHaveBeenCalled();
//   //   expect(result).toBe("Original Data");
//   // });

//   // it("should spy on the multiply method of CalcService", () => {
//   //   const spyMethod = spyOn(calc, 'multiply').and.returnValue(20);
//   //   const result = calc.multiply(4, 5);
//   //   expect(spyMethod).toHaveBeenCalled();
//   //   expect(result).toBe(20);
//   // });

//   // it("should spy on the addNumbers method of HomeComponent", () => {
//   //   const spyMethod = spyOn(home, 'addNumbers').and.returnValue(5);
//   //   const result = home.addNumbers(2, 3);
//   //   expect(spyMethod).toHaveBeenCalled();
//   //   expect(result).toBe(5);
//   // });

//   it("should get all users from DataService", () => {
//     const mockData = testingController.expectOne('api/users');
//     expect(mockData.request.method).toBe('GET');
//     mockData.flush(Object.values(USERS));

//     data.getAllUsers().subscribe((users: any) => {
//       expect(users).toBeTruthy();
//       expect(users.length).toBe(6);
//       const secondUser = users.find((myUser: any) => myUser.id === 2);
//       expect(secondUser.name).toBe("ansari");
//     });
//   });
// });


import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalcService } from './calc.service';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from './mock_data/user';
 
describe("App Describe", () => {
  let home: HomeComponent;
  let calc: CalcService;
  let data: DataService;
  let testingController: HttpTestingController;
 
  beforeEach(() => {
    console.log("before each method");
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeComponent, CalcService, DataService]
    });
    calc = TestBed.inject(CalcService);
    home = TestBed.inject(HomeComponent);
    data = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });
 
  it("multiplies numbers from service", () => {
    const result = calc.multiply(4, 5);
    expect(result).toBe(20);
  });
 
  it("adds numbers", () => {
    const result = home.addNumbers(2, 3);
    expect(result).toBe(5);
  });
 
  it("spies on the getData method", () => {
    const spyMethod = spyOn(calc, 'getData').and.returnValue('fake data');
    const result = calc.getData();
    expect(spyMethod).toHaveBeenCalled();
    expect(result).toBe("fake data");
  });
 
  it("spies on the at method", () => {
    const spyMethod = spyOn(calc, 'atmethod').and.returnValue('Original Data');
    const result = calc.atmethod();
    expect(spyMethod).toHaveBeenCalled();
    expect(result).toBe("Original Data");
  });
 
  it("spies on the multiply return value", () => {
    const spyMethod = spyOn(calc, 'multiply').and.returnValue(20);
    const result = calc.multiply(4, 5);
    expect(spyMethod).toHaveBeenCalled();
    expect(result).toBe(20);
  });
 
  it("spies on the addNumbers return value", () => {
    const spyMethod = spyOn(home, 'addNumbers').and.returnValue(5);
    const result = home.addNumbers(2, 3);
    expect(spyMethod).toHaveBeenCalled();
    expect(result).toBe(5);
  });
 
  it("httpTest-getting all the users", () => {
    data.getAllUsers().subscribe((USERS: any) => {
      expect(USERS).toBeTruthy();
      expect(USERS.length).toBe(6);
      const secondUser = USERS.find((myuser: any) => myuser.id === 2);
      expect(secondUser.name).toBe("ansari");
    });

    const mockRequest = testingController.expectOne('api/users');
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(Object.values(USERS));
  });
});