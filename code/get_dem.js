var roi = ee.Geometry.Polygon([
    [
      [-100.11841277978431, 45.65243701628444],
      [-100.53472403943333, 45.715818714845255],
      [-100.87687138650026, 46.42777216009284],
      [-100.37812016557385, 46.433484262040196],
      [-100.11841277978431, 45.65243701628444]
    ]
  ]);
  
  
  // Load the USGS 3DEP 10m DEM data and select the 'elevation' band
  var dem = ee.Image("USGS/3DEP/10m").select('elevation');
  
  // Clip the DEM to the ROI
  var clippedDem = dem.clip(roi);
  
  // Visualize the Clipped DEM
  Map.centerObject(roi, 8);
  Map.addLayer(clippedDem, {min: 0, max: 3000, palette: ['0000FF', '00FF00', 'FF0000']}, 'Clipped DEM');
  
  // Export the clipped DEM to Google Drive
  Export.image.toDrive({
    image: clippedDem,
    description: '10m_DEM_Clip_3',
    scale: 10,  // Matches the resolution of the DEM
    region: roi,  // Use the ROI for defining the export region
    fileFormat: 'GeoTIFF',
    fileNamePrefix: '10m_DEM_3'
  });