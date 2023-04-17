import { aui } from './helper/jest.setup';

describe('jest with askui', () => {

  it('should ask ginger a question', async () => {
    //Teams should be launched    
    await aui.execOnShell("open -a Microsoft Teams").exec();
    //Click on Search in Teams
         await aui.click().icon().withText('search').exec();
         //Enter Ginger in Search box and press enter
         await aui.typeIn('Ginger').textfield().exec();
         await aui.pressKey('enter').exec();
         //move mouse to ginger in chat and mouse left click
         await aui.moveMouseTo().text().withText('Ginger').below().text().withText('Ginger in chat').exec();
         await aui.mouseLeftClick().exec();
         //Enter NQLB in Text input field
         await aui.click().icon().withText('Type a new message').exec();
         await aui.typeIn('NQLB').textfield().exec();
         await aui.pressKey('enter').exec();
         //Verify the message response from ginger
         await aui.click().text().withText('Message by Ginger').exec();
         await aui.expect().text().withText('No QA Left Behind').exists().exec();
         //Type in Yes to ginger
         await aui.click().icon().withText('Type a new message').exec();
         await aui.typeIn('Yes').textfield().exec();
         //Verify message by ginger  
         await aui.click().text().withText('Message by Ginger').exec();
         await aui.expect().text().withText('Thank you for your valuable feedback!').exists().exec();
  });


});
