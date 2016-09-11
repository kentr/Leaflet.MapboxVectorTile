/**
 * 
 */

module.exports = L.TileLayer.Canvas = L.TileLayer.extend({
  createTile: function(coords){
      // create a <canvas> element for drawing
      var tile = L.DomUtil.create('canvas', 'leaflet-tile');
      // setup tile width and height according to the options
      var size = this.getTileSize();
      tile.width = size.x;
      tile.height = size.y;
      
      // return the tile so it can be rendered on screen
      return tile;
  },
  
  // converts tile coordinates to key for the tile cache
  // From leaflet source.
  _tileCoordsToKey: function (coords) {
    return coords.x + ':' + coords.y + ':' + coords.z;
  },
  
  // converts tile cache key to coordinates
  // From leaflet source.
  _keyToTileCoords: function (key) {
    var k = key.split(':'),
        coords = new L.Point(+k[0], +k[1]);
    coords.z = +k[2];
    return coords;
  },
  
});