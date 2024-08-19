import express from 'express' // -->EsModules syntax (Recommended)
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
// const express = require('express') //-->CommonJS syntax

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.getByID(+req.params.id)
  res.send(diary)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addednewDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addednewDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
