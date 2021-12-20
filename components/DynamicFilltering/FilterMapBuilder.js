import listStation from '../../data/listStation.json';
import { FilterStation, FilterAuthor, FilterArtworkType } from "./FilterModels";

// Creates a filtering structure
export class FilterMapBuilder {

    constructor() {
        // Create a copy
        this.parsedData = JSON.parse(JSON.stringify(listStation));

        this.authors = [];
        this.stations = [];
        this.artworkTypes = []
    }

    // Filter map creation
    createFilterMap() {
        const authorsMap = new Map();
        const stationsMap = new Map();
        const artworkTypesMap = new Map();

        for (let i = 0; i < this.parsedData.length; i++) {
            const currentStation = this.parsedData[i].station;

            // If no artwork is present, process station and continue
            if (!this.parsedData[i].artworks) {
                this.processStation(null, null, currentStation, stationsMap);
                continue;
            }

            for (let j = 0; j < this.parsedData[i].artworks.length; j++) {
                const currentAuthor = this.parsedData[i].artworks[j].author;
                const currentArtworkType = this.parsedData[i].artworks[j].type

                this.processAuthor(currentAuthor, currentArtworkType, currentStation, authorsMap)
                this.processStation(currentAuthor, currentArtworkType, currentStation, stationsMap);
                this.processArtworkType(currentAuthor, currentArtworkType, currentStation, artworkTypesMap);

            }
        }

        // Convert maps into arrays (maps are not needed anymore)
        this.authors = Array.from(authorsMap.values());
        this.stations = Array.from(stationsMap.values());
        this.artworkTypes = Array.from(artworkTypesMap.values());
    }

    // Helper method
    processAuthor(currentAuthor, currentArtworkType, currentStation, authorsMap) {
        let authorFromMap = authorsMap.get(currentAuthor);
        if (authorFromMap) {
            authorFromMap.artworkTypes.add(currentArtworkType)
            authorFromMap.stations.add(currentStation);
        }
        else {
            let author = new FilterAuthor(currentAuthor);
            author.artworkTypes.add(currentArtworkType);
            author.stations.add(currentStation);
            authorsMap.set(currentAuthor, author);
        }
    }

    // Helper method
    processArtworkType(currentAuthor, currentArtworkType, currentStation, artworkTypesMap) {
        let artworkTypeFromMap = artworkTypesMap.get(currentArtworkType);
        if (artworkTypeFromMap) {
            artworkTypeFromMap.authors.add(currentAuthor)
            artworkTypeFromMap.stations.add(currentStation);
        }
        else {
            let artworkType = new FilterArtworkType(currentArtworkType);
            artworkType.authors.add(currentAuthor);
            artworkType.stations.add(currentStation);
            artworkTypesMap.set(currentArtworkType, artworkType);
        }
    }

    // Helper method
    processStation(currentAuthor, currentArtworkType, currentStation, stationsMap) {
        let stationFromMap = stationsMap.get(currentStation);
        if (stationFromMap) {
            if (currentArtworkType && currentAuthor) {
                stationFromMap.artworkTypes.add(currentArtworkType);
                stationFromMap.authors.add(currentAuthor);
            }
        }
        else {
            let station = new FilterStation(currentStation);
            if (currentArtworkType && currentAuthor) {
                station.authors.add(currentAuthor);
                station.artworkTypes.add(currentArtworkType);
            }
            stationsMap.set(currentStation, station);
        }
    }
}
