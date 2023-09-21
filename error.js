
process.on('uncaughtException',(error)=>{
    console.log('uncaughtException',error);
});
process.on('unhandledRejection',(error)=>{
    console.log('unhandledRejection',error);
});

throw new Error('Oops');