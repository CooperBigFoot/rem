from riverrem.REMMaker import REMMaker

# provide the DEM file path and desired output directory
rem_maker = REMMaker(dem='/Users/cooper/Desktop/rem/assets/10m_DEM_Big.tif',
                     out_dir='/Users/cooper/Desktop/rem/assets/')
# create an REM
rem_maker.make_rem_viz(cmap='mako')
