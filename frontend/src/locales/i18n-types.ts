// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en-US'

export type Locales =
	| 'en-US'
	| 'fr-FR'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	errors: {
	}
	fields: {
	}
	actions: {
		/**
		 * C​r​e​a​t​e
		 */
		create: string
	}
	utils: {
	}
	/**
	 * H​e​l​l​o
	 */
	hello: string
}

export type TranslationFunctions = {
	errors: {
	}
	fields: {
	}
	actions: {
		/**
		 * Create
		 */
		create: () => LocalizedString
	}
	utils: {
	}
	/**
	 * Hello
	 */
	hello: () => LocalizedString
}

export type Formatters = {}
