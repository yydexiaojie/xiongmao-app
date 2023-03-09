/**
 * 养老
 */
const OASI_PERCENT_COM = 0.2
const OASI_PERCENT_SELF = 0.08
/**
 * 医疗
 */
const SLH_PERCENT_COM = 0.08
const SLH_PERCENT_SELF = 0.02
/**
 * 失业保险
 */
const UI_PERCENT_COM = 0.02
const UI_PERCENT_SELF = 0.01
const UI_PERCENT_SELF_AH = 0
/**
 * 工伤保险
 */
const OII_PERCENT_COM = 0.02
const OII_PERCENT_SELF = 0
/**
 *  生育保险
 */
const MI_PERCENT_COM = 0.008
const MI_PERCENT_SELF = 0
/**
 * 公积金
 */
const PPF_PERCENT_COM = 0.12
const PPF_PERCENT_SELF = 0.12

interface ISlProps {
	oasi_com?: string | number // yanglao
	oasi_self?: string | number
	slh_com?: string | number // yibao
	slh_self?: string | number
	ui_com?: string | number // shiye
	ui_self?: string | number
	oii_com?: string | number // gongshang
	oii_self?: string | number
	mi_com?: string | number // shengyu
	mi_self?: string | number
}

interface IPPFProps {
	ppf_com?: string | number
	ppf_self?: string | number
}

export const slComputerFormat = (num: number, hstype: string = '3'): ISlProps => {
	if (!num) return {
		oasi_com: 0,
		oasi_self: 0,
		slh_com: 0,
		slh_self: 0,
		ui_com: 0,
		ui_self: 0,
		oii_com: 0,
		oii_self: 0,
		mi_com: 0,
		mi_self: 0,
	}
	
	return {
		oasi_com: num * OASI_PERCENT_COM,
		oasi_self: num * OASI_PERCENT_SELF,
		slh_com: num * SLH_PERCENT_COM,
		slh_self: num * SLH_PERCENT_SELF,
		ui_com: num * UI_PERCENT_COM,
		ui_self: num * (hstype === '2' || hstype === '4' ? UI_PERCENT_SELF_AH : UI_PERCENT_SELF),
		oii_com: num * OII_PERCENT_COM,
		oii_self: num * OII_PERCENT_SELF,
		mi_com: num * MI_PERCENT_COM,
		mi_self: num * MI_PERCENT_SELF,
	}
}

export const ppfComputerFormat = (num: number, hstype: number = 0.12): IPPFProps => {
	if (!num) return {
		ppf_com: 0,
		ppf_self: 0,
	}
	
	return {
		ppf_com: num * PPF_PERCENT_COM,
		ppf_self: num * PPF_PERCENT_SELF,
	}
}