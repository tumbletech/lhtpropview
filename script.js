//Import variables and functions from app.js
import { propertyData, dataLoaded, fetchMLSData } from './app.js';

//Waiting for DOM to load
document.addEventListener("DOMContentLoaded", async () => {
    await fetchMLSData();

    //DOM elements
    const showResultsBtn = document.getElementById("showResultsBtn");
    const resultsList = document.getElementById("results-list");

    //Handle MLS Results Button
    showResultsBtn.addEventListener("click", () => {
        if (!dataLoaded) {
            alert("Data is still loading. Please try again in a moment.");
            return;
        }

        //Filter and display logic here
        const filteredResults = Object.values(propertyData).filter((properties) => {
            //Applying filtering logic
            return properties.property_Acres >=20 && properties.property_Acres <=50;
        });

        resultsList.innerHTML = filteredResults.length
            ? filteredResults.map((properties) => `
                <div>
                    <p><strong>Acres:</strong> ${properties.property_Acres}</p>
                    <p><strong>Days on Market:</strong> ${properties.property_DOM}</p>
                    <p><strong>County:</strong> ${properties.property_County}</p>
                </div>
            `).join("")
            : "<p>No results found.</p>";
    });
});
