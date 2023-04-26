import os

folder_path = "C:/Users/hello/Pictures/Business card/Diet"  # Replace with the path to your folder
start_number = 23

# Get all file names in the folder
file_names = os.listdir(folder_path)

# Iterate through each file and rename it with a number starting from 12
for i, file_name in enumerate(file_names):
    # Get the full path of the file
    full_path = os.path.join(folder_path, file_name)
    # Create the new file name with a number starting from 12
    new_file_name = str(start_number + i) + os.path.splitext(file_name)[1]
    new_full_path = os.path.join(folder_path, new_file_name)
    # Rename the file
    os.rename(full_path, new_full_path)
