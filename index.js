/*
 * MIT License
 * 
 * Copyright (c) 2021 Sword
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

// I would like to say that I hate the fact that I knew kinda how to do this. Somebody needs to take away my ability to write code.
const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client()


// Import our list of strings
const StringsList = require('./strings').strings


client.login(process.env.TOKEN)


// Ready event, fired on bot startup
client.on('ready', async () => {
    client.user.setActivity('goodbye Sus', {
        type: 'PLAYING'
      })
    console.log('Uwu the bot started how poggers')
})

// Message event, fired on every new message
client.on('message', async (message) => {
    if (StringsList.find(sus =>sus.includes(message.content.toLowerCase()))) {
        message.delete()
        return
    }    
})