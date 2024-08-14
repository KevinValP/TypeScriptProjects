import express from 'express' //-->EsModules syntax (Recommended)
import { getEntries } from '../services/diaryServices'

//const express = require('express') //-->CommonJS syntax 

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getEntries())
})

router.post('/', (_req, res) => {
    res.send('saving a new diary')
})

export default router