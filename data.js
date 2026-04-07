////////////////////////////////////////
// when set to private  - privateAudio plays if assigned.  allows outgoing calls to contacts without privateAudio. unsaved numbers play standard audio.
// when set to public - publicAudio plays if assigned. all other outgoing calls are allowed.
////////////////////////////////////////
var environmentStatus = "private";

var contacts =[

////////////////////////////////////////
// TEMP CONTACTS (ADD/REMOVE FROM ICLOUD AND GSHEET WHEN FINALIZING)
////////////////////////////////////////


////////////////////////////////////////
// 911
////////////////////////////////////////
{name: '911', telNumber: '911', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: '', publicAudio: '', },

////////////////////////////////////////
// DECOY CONTACTS (NOT IN ICLOUD. IF NEED TO ALLOW TRUE CONTACT DURING environmentStatus = "private" - TEMPORARILY ADD TO ICLOUD)
////////////////////////////////////////
{name: 'USPS', telNumber: '4103814373', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'usps', publicAudio: 'busy', },
{name: 'Howard County Library', telNumber: '4103137700', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'hcLibrary', publicAudio: 'busy', },
{name: 'Bain Center', telNumber: '4103137213', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'bain', publicAudio: 'busy', },
{name: 'Passport Office', telNumber: '18774872778', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'passport', publicAudio: 'busy', },
{name: 'Passport Office', telNumber: '8774872778', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'passport', publicAudio: 'busy', },
{name: 'Passport Office', telNumber: '8888747793', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'passport', publicAudio: 'busy', },
{name: 'Rush My Passport', telNumber: '8002201899', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'rush my passport', publicAudio: 'busy', },
{name: 'Rush My Passport', telNumber: '8775039838', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'rush my passport', publicAudio: 'busy', },
{name: 'Passport World', telNumber: '9364940894', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'passport world', publicAudio: 'busy', },
{name: 'Proxity', telNumber: '7575028951', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'proxity', publicAudio: 'busy', },
{name: 'Proxity John', telNumber: '7575028952', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'proxity', publicAudio: 'busy', },
{name: 'Proxity Lori', telNumber: '7573019994', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'proxity', publicAudio: 'busy', },
{name: 'CIBT', telNumber: '8009292428', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'CIBT', publicAudio: 'busy', },
{name: 'CIBT', telNumber: '8773048071', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'CIBT', publicAudio: 'busy', },
{name: 'SuppyCore', telNumber: '8008607940', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore', telNumber: '8159647940', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore', telNumber: '8159971628', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore', telNumber: '8159975419', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore', telNumber: '6085611544', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore', telNumber: '8159971666', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore', telNumber: '8159975398', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore Christina', telNumber: '8472879051', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore Christina', telNumber: '8159971648', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore Christina', telNumber: '18778229286', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore Christina', telNumber: '3375370585', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'SuppyCore Christina', telNumber: '8159971651', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'supplycore', publicAudio: 'busy', },
{name: 'Unicor', telNumber: '2023073198', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor El Reno', telNumber: '4052624875', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Nick Abshire', telNumber: '4053197708', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Chris Davis', telNumber: '4053197670', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Manchester', telNumber: '6065981900', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Atlanta', telNumber: '4046355100', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Craig Broadwater', telNumber: '8433879503', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Williamsburg', telNumber: '8433879400', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Latrell Green Office', telNumber: '2023053823', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Latrell Green Cell', telNumber: '2022093869', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Unicor Yazoo City Low', telNumber: '6627514800', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'unicor', publicAudio: 'busy', },
{name: 'Voicemail Box', telNumber: '3018062639', caption: '', voicemail: '', textColor: 'black', display: false, privateAudio: 'vmBox', publicAudio: 'vmBox', },

////////////////////////////////////////
// REAL CONTACTS
////////////////////////////////////////
{name: 'Adam Neighbor', telNumber: '+12404613608', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Agarwal Accountant', telNumber: '3014045258', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Agarwal Son  Raj', telNumber: '3014959777', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Ajay - Tanu Father', telNumber: '7322599418', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Akshad Mom', telNumber: '7324040642', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Akshad Sagar Jan 21', telNumber: '7325937053', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Akshat International', telNumber: '918046069562', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Anand Arora', telNumber: '+447940050044', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Anil Khatri', telNumber: '4106089060', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Anju Canada', telNumber: '7057921510', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Ashu  Nisha School Girotra', telNumber: '+919878375376', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Barbar Shop', telNumber: '4435830880', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Bawa Sanjay - Nandit Brother', telNumber: '+61412546803', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Bge Reduce Bill', telNumber: '4432768840', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Comcast', telNumber: '8002662278', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dhruv Saren', telNumber: '7742533451', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dimple Siddhu', telNumber: '5712633947', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dixa Dolly', telNumber: '7743657575', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dolly Cell.    10th August', telNumber: '7742531295', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Domonic Barnes And Noble', telNumber: '3018091552', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dr D S Arora', telNumber: '+919811217112', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dr Ochaney Mahesh April 16', telNumber: '+14107684700', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'East Columbia', telNumber: '4103137680', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Floyds Barbershop', telNumber: '4435398720', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Gandhi Mrs', telNumber: '011911126018873', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Gandhi Sharda', telNumber: '011918826655325', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Geeta Didi. Anand Shahib', telNumber: '4105319579', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Geeta Didi. Anand Shahib', telNumber: '4438121630', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Guddi', telNumber: '0119111204374707', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Guddi Didi N. Delhi', telNumber: '+919811287253', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Gurdawra Silver Spring', telNumber: '3013842133', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Imtiaz Chowdhry', telNumber: '4109643611', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Jayesh', telNumber: '3092531405', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Madhu John Hopkins', telNumber: '4105507871', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Madhu Masi', telNumber: '011919910420170', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Madhu Reema India Vijay Masi', telNumber: '011919310425550', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Madhu Reema India Vijay Masi', telNumber: '011919811637151', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Madhu Vijay', telNumber: '+911244044059', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Masala Bazar', telNumber: '4107159900', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Meals On Wheel', telNumber: '4435730942', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Meena Sharma', telNumber: '2408995482', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'MOVICO', telNumber: '4437558990', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Nandit Gandhi Jan 24rth', telNumber: '5084097856', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Nisha Garotra Feb 9th', telNumber: '+919814711736', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'O P Grover India', telNumber: '+919871825853', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Patient First Columbia', telNumber: '4437184067', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Patient First. Corporate Office', telNumber: '8049685700', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Pichanga', telNumber: '4104614266', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'PNC Codes', telNumber: '76200', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Poonam. DO Prabha Didi', telNumber: '+919810003511', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Prabha Didi Son Rajesh', telNumber: '0119999026023', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Prabha Didi Son Rajesh', telNumber: '+919810647304', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Preyinka Mom.  Suraj', telNumber: '4436189193', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Radiology Advanced', telNumber: '4434361600', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rajender Gattu', telNumber: '+17346526107', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rajiv Rehani', telNumber: '3017288056', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rams Fast Tax Service', telNumber: '3014451040', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rema Gandhi', telNumber: '5088781498', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Risab. Shivaan Friend', telNumber: '7347316107', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rishab Mom', telNumber: '7346528142', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Satish Kumar', telNumber: '+12812076449', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Satish Kumar', telNumber: '+18326930948', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shilpa', telNumber: '2407235725', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shivaan', telNumber: '3018064071', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shyam Suni Husband', telNumber: '+14438785431', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sundesh', telNumber: '3013103795', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sundesh Father Mohan', telNumber: '+14108120314', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Suni Jani', telNumber: '4107074135', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sunil Dr Dolly 30 Sept', telNumber: '5086156739', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Suraj Dad', telNumber: '2403372022', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Suraj Mom Pinki', telNumber: '4109601435', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'SURAJ SHIVAAN FRIEND', telNumber: '4109352786', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Surgen Office Mathew', telNumber: '+14104486400', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sushma Dr Pinki Sister', telNumber: '+12023297774', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'T T Maha Abdin', telNumber: '4432552675', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'UPS Billing', telNumber: '9739444482', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Urgent Care Columbia', telNumber: '4102909990', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Vaibhav', telNumber: '7323518588', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Vaibhav Dad', telNumber: '7325700861', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Wendys Rt 108', telNumber: '4435455464', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },

]

var calls = [

////////////////////////////////////////
// UNCOMMENT WHEN NEED TO SHOW VOICEMAIL IS WORKING
////////////////////////////////////////
{name: 'Shivaan', telNumber: '3018064071', caption: 'Few Days Ago', voicemail: 'vmTest', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },


////////////////////////////////////////
// CALLS
////////////////////////////////////////
{name: 'Jayesh', telNumber: '3092531405', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shivaan', telNumber: '3018064071', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shivaan', telNumber: '3018064071', caption: 'Few days ago', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shivaan', telNumber: '3018064071', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Nandit Gandhi Jan 24rth', telNumber: '5084097856', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Suraj Dad', telNumber: '2403372022', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Suraj Dad', telNumber: '2403372022', caption: 'Few days ago', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Suraj Dad', telNumber: '2403372022', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rajiv Rehani', telNumber: '3017288056', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Vaibhav', telNumber: '7323518588', caption: 'Few days ago', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Vaibhav Dad', telNumber: '7325700861', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Nandit Gandhi Jan 24rth', telNumber: '5084097856', caption: 'Few days ago', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shivaan', telNumber: '3018064071', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Vaibhav Dad', telNumber: '7325700861', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sundesh', telNumber: '3013103795', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shivaan', telNumber: '3018064071', caption: 'Few days ago', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shivaan', telNumber: '3018064071', caption: 'Few days ago', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Nandit Gandhi Jan 24rth', telNumber: '5084097856', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Nandit Gandhi Jan 24rth', telNumber: '5084097856', caption: 'Few days ago', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sunil Dr Dolly 30 Sept', telNumber: '5086156739', caption: '', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dr D S Arora', telNumber: '+919811217112', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Geeta Didi. Anand Shahib', telNumber: '4438121630', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Gurdawra Silver Spring', telNumber: '3013842133', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Gurdawra Silver Spring', telNumber: '3013842133', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Bawa Sanjay - Nandit Brother', telNumber: '+61412546803', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Nandit Gandhi Jan 24rth', telNumber: '5084097856', caption: '', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Nandit Gandhi Jan 24rth', telNumber: '5084097856', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Shivaan', telNumber: '3018064071', caption: '', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sunil Dr Dolly 30 Sept', telNumber: '5086156739', caption: '', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sunil Dr Dolly 30 Sept', telNumber: '5086156739', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rajiv Rehani', telNumber: '3017288056', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rajiv Rehani', telNumber: '3017288056', caption: '', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rajiv Rehani', telNumber: '3017288056', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Sundesh', telNumber: '3013103795', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Gurdawra Silver Spring', telNumber: '3013842133', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dolly Cell.    10th August', telNumber: '7742531295', caption: '', voicemail: '', textColor: 'red', display: true, privateAudio: '', publicAudio: '', },
{name: 'Dolly Cell.    10th August', telNumber: '7742531295', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Suraj Dad', telNumber: '2403372022', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },
{name: 'Rajiv Rehani', telNumber: '3017288056', caption: '', voicemail: '', textColor: 'black', display: true, privateAudio: '', publicAudio: '', },

]