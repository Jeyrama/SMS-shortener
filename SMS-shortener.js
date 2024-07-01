/*
SMS messages are limited to 160 characters. 
It tends to be irritating, especially when freshly written message is 164 characters long.

Your task is to shorten the message to 160 characters, 
starting from end, by replacing spaces with camelCase, as much as necessary.

If all the spaces are replaced but the resulting message is still longer than 160 characters, 
just return that resulting message.

Example 1:
  Original message (169 chars):
    No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; 
    two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.

  Shortened message (160 chars):
    No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; 
    two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.
*/


// Solution