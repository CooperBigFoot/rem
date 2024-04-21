from riverrem.REMMaker import REMMaker

# provide the DEM file path and desired output directory
rem_maker = REMMaker(dem='/Users/cooper/Desktop/rem/assets/Reprojected_HighRes_DEM.tif',
                     out_dir='/Users/cooper/Desktop/rem/assets/')
# create an REM
rem_maker.make_rem_viz(cmap='mako_r')
