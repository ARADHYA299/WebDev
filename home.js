const path = require("path");
const fs = require("fs");

const homedatapath = path.join(__dirname, "../data", "databasehomes.json");

module.exports = class Home {
    constructor(Housename, HomeType, Location, Guests, Bedrooms, Beds, Amenities, Description, Price) {
        this.Housename = Housename;
        this.HomeType = HomeType;
        this.Location = Location;
        this.Guests = Guests;
        this.Bedrooms = Bedrooms;
        this.Beds = Beds;
        this.Amenities = Amenities;
        this.Description = Description;
        this.Price = Price;
    }

    save() {
        fs.readFile(homedatapath, (err, data) => {
            let homes = [];
            if (!err && data.length > 0) {
                homes = JSON.parse(data);
            }
            homes.push(this);

            fs.writeFile(homedatapath, JSON.stringify(homes), (err) => {
                if (err) {
                    console.error("Error writing file", err);
                } else {
                    console.log("File written successfully");
                }
            });
        });
    }

    static fetch(){
      return new Promise((resolve , reject) =>{
        fs.readFile(homedatapath , (err,data) =>{
          console.log("Reading homes from file");
          if(err){
            console.log("Error occurred while writing",err);
            resolve([]);
          }
          else{
            const home = data.length > 0 ? JSON.parse(data) : [];
            resolve(home);
          }
        })
      })

    }
    
    
    
    
    
    
    
    
    
    
};
