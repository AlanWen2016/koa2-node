const koa = require('koa');

const app  = new koa();


app.use(async (ctx) => {
    if(ctx.url === '/index'){
        ctx.cookies.set(
            'cid',
            'hello-world',
            {
                domain:'localhost',
                path: '/index',
                maxAge: 10* 60 * 1000,
                expires: new Date('2018-11-19'),
                httpOnly: false,
                overwrite: true
            }
        );
        ctx.body = 'cookie is ok';
    }else{
        ctx.body = 'hello world';
    }
})

app.listen(3000, () =>{
    console.log('[demo] how to set cookie at port 3000');
})


