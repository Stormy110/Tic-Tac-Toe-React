import React from 'react';

class Storage {
    constructor( storageName = 'gameScoreboard', initialValue = '[]') {
        this.storageName = storageName
        
        //check if localStorage contains any data from previous games
        if (!localStorage.getItem(storageName)) {
            localStorage.setItem(storageName, initialValue)
        }
    }

    // Load data from previous games from localStorage
    getData() {
        return JSON.parse(localStorage.getItem(this.storageName))
    }
    //update data in localstorage
    update(data) {
        localStorage.setItem(this.storageName, JSON.stringify(data))
    }
}

export default Storage;