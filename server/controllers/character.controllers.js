
// Models
const { Character } = require('../models/Character.models');
const { Favorite } = require('../models/Favorite.models');

// Utils
const { catchAsync } = require('../utils/catchAsync.utils');
const { AppError } = require('../utils/appError.utils');

const createCharacter = catchAsync(async (req, res, next) => {
	const { id } = req.body;
const exists =  await Character.findOne({where:{id}})

if(!exists){
	const newCharacter = await Character.create({id:id});

	res.status(200).json({
		status: 'success',
		data: { newCharacter },
	});
}else{
	return next(new AppError('Character already exists', 200));

}
	
});

const favoriteCharacter = catchAsync(async (req, res, next) => {
	const { ref_api} = req.params;
	const { sessionUser } = req;

	const character= await Character.findOne({
		where: { id:ref_api, status: 'active' },
	});


	if (!character) {
		return next(new AppError('Character does not exists', 404));
	}

	// Check if it is the first time the user marks the song as favorite
	const favoriteExists = await Favorite.findOne({
		where: { ref_api, userId: sessionUser.id },
		
	});

	if (!favoriteExists) {
		// Add song to favorites to that user
		await Favorite.create({ ref_api, userId: sessionUser.id });
	} else {
		// Song is already in favorites, add or remove it according to its current status
		const newStatus = !favoriteExists.favorite;
        
		await favoriteExists.update({ favorite: newStatus });
	}

	res.status(200).json({
		status: 'success',
	});


});
const getAllCharaters = catchAsync(async (req, res, next) => {
	const { sessionUser } = req;

	const allCharacter = await Favorite.findAll({where:{status:"active", userId:sessionUser.id, favorite:true}})


	res.status(201).json({
		status:"success",
		data:allCharacter
	})
})

const getCharacterId = catchAsync(async (req, res, next) => {
	const { sessionUser } = req;
	const {id}= req.params


	const character = await Favorite.findOne({where:{status:"active", userId:sessionUser.id, ref_api:id}})


	res.status(201).json({
		status:"success",
		data:character
	})
})

module.exports = { createCharacter, favoriteCharacter, getAllCharaters,getCharacterId}
