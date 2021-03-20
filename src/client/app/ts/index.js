"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const print_1 = require("./print");
require("../css/style.css");
const jsfile_1 = require("./jsfile");
(() => {
    const msg = 'hello';
    new print_1.Print().print(`Check: TypeScript: msg is ${msg}`);
    const includes = [1, 2, 3].includes(3);
    console.log(`Check: Polyfill: [1,2,3].includes(3) is ${includes}`);
    new jsfile_1.PrintJs().print('Check: JS file: message by js');
    console.log(`Check: babel-trandsform-runtime: _babelPolyfill is ${window._babelPolyfill}`);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFnQztBQUNoQyw0QkFBMEI7QUFDMUIscUNBQW1DO0FBRW5DLENBQUMsR0FBUyxFQUFFO0lBQ1YsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO0lBQ3BCLElBQUksYUFBSyxFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRXRELE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUVuRSxJQUFJLGdCQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUM3RixDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpbnQgfSBmcm9tICcuL3ByaW50JztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQcmludEpzIH0gZnJvbSAnLi9qc2ZpbGUnO1xuXG4oKCk6IHZvaWQgPT4ge1xuICBjb25zdCBtc2cgPSAnaGVsbG8nO1xuICBuZXcgUHJpbnQoKS5wcmludChgQ2hlY2s6IFR5cGVTY3JpcHQ6IG1zZyBpcyAke21zZ31gKTtcblxuICBjb25zdCBpbmNsdWRlcyA9IFsxLCAyLCAzXS5pbmNsdWRlcygzKTtcbiAgY29uc29sZS5sb2coYENoZWNrOiBQb2x5ZmlsbDogWzEsMiwzXS5pbmNsdWRlcygzKSBpcyAke2luY2x1ZGVzfWApO1xuXG4gIG5ldyBQcmludEpzKCkucHJpbnQoJ0NoZWNrOiBKUyBmaWxlOiBtZXNzYWdlIGJ5IGpzJyk7XG5cbiAgY29uc29sZS5sb2coYENoZWNrOiBiYWJlbC10cmFuZHNmb3JtLXJ1bnRpbWU6IF9iYWJlbFBvbHlmaWxsIGlzICR7d2luZG93Ll9iYWJlbFBvbHlmaWxsfWApO1xufSkoKTtcbiJdfQ==