// Create the Employee constructor function
function Employee(title) {
    this.title = title;
  } 
  
  // Add methods to the Employee prototype
  Employee.prototype.setTitle = function (title) {
    this.title = title;
  };
  
  Employee.prototype.getTitle = function () {
    return this.title;
  };
  
  // Create the Engineer constructor function that inherits from Employee
  function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
  }
  
  // Set up inheritance by linking prototypes
  Engineer.prototype = Object.create(Employee.prototype);
  Engineer.prototype.constructor = Engineer;
     
  // Add methods to the Engineer prototype
  Engineer.prototype.setIsManager = function (isManager) {
    this.isManager = isManager;
  };
  
  Engineer.prototype.getIsManager = function () {
    return this.isManager;
  };
  
  // Example usage:
  const engineer = new Engineer('Software Engineer', false);
  console.log(engineer.getTitle()); // Output: Software Engineer
  console.log(engineer.getIsManager()); // Output: false
  
  engineer.setTitle('Senior Software Engineer');
  engineer.setIsManager(true);
  
  console.log(engineer.getTitle()); // Output: Senior Software Engineer
  console.log(engineer.getIsManager()); // Output: true
  