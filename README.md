# Teppen Json

This project is a web friendly JSON representation of the card data for Capcom's & GungHo's card game 'Teppen'.

## Usage

### API

You can consume the data as if it were an api. 

`curl https://nminchow.github.io/teppen-json/cards/COR001.json` will return the data for Sean:

```json
{
    "name": "Sean",
    "id": "COR001",
    "image": "https://nminchow.github.io/teppen-json/images/cor001.png",
    "attributes": {
        "No.": "COR 001",
        "Type": "Unit",
        "Tribe": "Human",
        "Rarity": "Common",
        "MP": "3",
        "Attack": "2",
        "HP": "6",
        "Effects": ""
    }
}
```

`curl https://nminchow.github.io/teppen-json/cards.json` will yield the json representation of all card data in an array.


### Local

You can also clone the repo and use the data locally. Note that the paths within the data are hardcoded to the web address, so you will want to do a bit of coalescing to direct the images to your local version.


## Development / Contributing

Contributions are welcome!

Setup:
1. clone
2. `cd generate`
3. `npm install`
4. `node main.js`

[generate/main.js](generate/main.js) essentially takes the [generate/scrape/index.html](generate/scrape/index.html), parses it, and outputs the data as json into the `cards` directory, and as [cards.json](cards.json).

No tests or anything currently. If card data is updated, you will need to re-pull the `generate/scrape/index.html` file and possibly all images into `/images/`.

___

### License

All formatting and application logic is covered by the MIT License - see [LICENSE.md](LICENSE.md) for details.

'TEPPEN', all art, names, and trademarks are copyright of Capcom & GungHo and not covered by this license.
