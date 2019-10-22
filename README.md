# Watch List

## install the dependencies

```console
yarn install
```

## run the following command in the top root directory to run the application

```console
yarn start
```

## Assumptions

The suggested API is returning information of the movies that have already been release.  I can easily filter them out, but I assumed it is ok to display them.

The upcoming movie API will return an empty array if the page query parameter is too large, so I arbitrarily set the maximum pagination limit to 200.
This issue can be resolved if I set up a server application to optimize the performance of the API. (I could probably cache the returned results and count how many valid movie items were returned.)

~~### contact Daiki Nakashita(daiki815@gmail.com) for the database credentials~~
