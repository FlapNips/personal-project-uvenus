module.exports = app => {
	atualizationsDate = () => {
		let today = new Date()
		let dd    = String(today.getDate())
		let mm    = String(today.getMonth())
		let yyyy  = String(today.getFullYear())
		let hh    = String(today.getHours())
		let min   = String(today.getMinutes())
		let ss    = String(today.getSeconds())

		if(dd.length ==1) dd  = `0${dd}`
		if(mm.length ==1)mm   = `0${mm}`
		if(hh.length ==1)hh   = `0${hh}`
		if(min.length ==1)min = `0${min}`
		if(ss.length ==1)ss   = `0${ss}`
		today              = `${dd} / ${mm} / ${yyyy}`
		time               = `${hh}: ${min}: ${ss}`
		return { today, time }
	}

	onlyDate = () => {
		atualizationsDate().today
	}
	onlyTime = () => {
		atualizationsDate().time
		return time
	}
	dateAndTime = () => {
		let today = atualizationsDate().today
		let time = atualizationsDate().time
		return `${today} - ${time}`
	}
	return { onlyDate, onlyTime, dateAndTime }
}