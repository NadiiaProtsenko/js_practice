        let basePrice = 10000;
        let year = 2020;
        let mileage = 75000;
        let hasClimateControl = true;
        let safetyPackage = true;
        let isElectric = false;
        let addyear;
        let addmileage;
        let addhasClimateControl;
        let addsafetyPackage;
        let addisElectric;


        if (year >= 2019 && year <= 2022) {
            addyear = basePrice*10/100;
        }
        else {
            addyear = 0;
        }

        if (mileage >= 50000 && mileage <= 100000) {
            addmileage = -(basePrice*5/100);
        }
        else {
            addmileage = 0;
        }

        if (hasClimateControl) {
            addhasClimateControl = basePrice*7/100;
        }
        else {
            addhasClimateControl = 0;
        }

        if (safetyPackage) {
            addsafetyPackage = basePrice*8/100;
        }
        else {
            addsafetyPackage = 0;
        }

        if (isElectric) {
            addisElectric = basePrice*15/100;
        }
        else {
            addisElectric = 0;
        }

        let finalPrice;
        finalPrice = basePrice + addyear+addmileage+addhasClimateControl+addsafetyPackage+addisElectric;

        console.log("Base price was " + basePrice + ", and final price is " + finalPrice+ ".");
        console.log("Base price was " + basePrice + ",\n and year added " + addyear +",\n and mileage added " + addmileage + ",\n and hasClimateControle added " + addhasClimateControl + ",\n and safety package added " + addsafetyPackage + ",\n and isElectric added " +addisElectric + ".");

    