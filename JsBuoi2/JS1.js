/**
 *     BVN:
B1: Tạo 1 class People gồm : tên, tuổi, giới tính, 
địa chỉ, function gioiThieu(){}
: Tạo 1 class Student extends từ People thêm thuộc
 tính: university lưu thông tin trường đại học
Tạo 1 mảng array gồm 5 Stdudent

 */

/**
 * This is class People
 */
 class People{
     constructor(name, age, sex, adress) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.adress = adress;
        function gioiThieu(){
            console.log('Xin chao Viet Nam');
        }
    }
}
/**
 * This is class Student extend from class People
 */
 class Student extends People{
     constructor(name, age, sex, adress, university){
        super(name, age, sex, adress);
        this.university = university;
    }
}
/**
 * initializing an array data
 */
var arrStudent =[];
/**
 * initializing data for array
 */
var std1 = new Student('Sara',18,'female','NewYork', 'Harvard');
var std2 = new Student('David',20,'male','Wall', 'Harvard');
var std3 = new Student('Adele',18,'female','NewYork', 'Harvard');
var std4 = new Student('Beola',18,'female','NewYork', 'Harvard');
var std5 = new Student('Cary',18,'female','NewYork', 'Harvard');

/**
 * Add student in array
 */
arrStudent.push(std1);
arrStudent.push(std2);
arrStudent.push(std3);
arrStudent.push(std4);
arrStudent.push(std5);
/**
 * Print elements in the array
 */
for(var i = 0 ; i < arrStudent.length; i++){
    console.log(arrStudent[i]);
}

 
