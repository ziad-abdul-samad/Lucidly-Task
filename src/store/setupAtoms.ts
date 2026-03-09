import { atom } from "jotai"

export const modalOpenAtom = atom(false)

export const currentStepAtom = atom(1)

export const nameAtom = atom("Alice")

export const emailAtom = atom("alice@wonderland.space")

export const interestsAtom = atom<string[]>([])

export const completedAtom = atom(false)
