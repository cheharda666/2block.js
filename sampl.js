#check if chaindata folder exists.
chaindata_dir = 'chaindata'
if not os.path.exists(chaindata_dir):
  #make chaindata dir
  os.mkdir(chaindata_dir)
  #check if dir is empty from just creation, or empty before
if os.listdir(chaindata_dir) == []:
  #create first block
  first_block = create_first_block()
  first_block.self_save() 
