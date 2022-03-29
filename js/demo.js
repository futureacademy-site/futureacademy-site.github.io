			const dgrade1Btn = document.querySelector("#dgrade1Btn");
			const dgrade2Btn = document.querySelector("#dgrade2Btn");
			const dgrade3Btn = document.querySelector("#dgrade3Btn");
			const ddisplayLesson = document.querySelector("#ddisplayLesson");
			const dlessonplanTitle = document.querySelector(".dls-title");
			const dsearch = document.querySelector("#dsearch-input");
			let dgradeFilterr;
			let dhtmlResult;

			dgrade1Btn.addEventListener('click', event => {
				dgrade1Btn.classList.add("selected-g");
				dgrade2Btn.classList.remove("selected-g");
				dgrade3Btn.classList.remove("selected-g");
				dlessonplanTitle.innerHTML="Video lesson for Grade 1";
				dsearch.value = "";
				ddisplayLesson.innerHTML = "";


				dgradeFilterr = students.filter(students => students.grade === 1);

				displayVideoAndInfo();

			});

			dgrade2Btn.addEventListener('click', event => {

				dgrade2Btn.classList.add("selected-g");
				dgrade1Btn.classList.remove("selected-g");
				dgrade3Btn.classList.remove("selected-g");
				dlessonplanTitle.innerHTML="Video lesson for Grade 2";
				ddisplayLesson.innerHTML = "";
				dsearch.value = "";

				dgradeFilterr = students.filter(students => students.grade === 2);
				displayVideoAndInfo();

			});

			dgrade3Btn.addEventListener('click', event => {
				dgrade3Btn.classList.add("selected-g");
				dgrade1Btn.classList.remove("selected-g");
				dgrade2Btn.classList.remove("selected-g");
				dlessonplanTitle.innerHTML="Video lesson for Grade 3";
				ddisplayLesson.innerHTML = "";
				dsearch.value = "";

				dgradeFilterr = students.filter(students => students.grade === 3);
				displayVideoAndInfo();
		
			});

			
			dsearch.addEventListener('keyup', event => {
				ddisplayLesson.innerHTML = "";
				if(dsearch.value === ""){
					displayVideoAndInfo();
				}else{
					
					let searchfilter = dgradeFilterr.filter(dgradeFilterr => dgradeFilterr.title.toLowerCase().includes(dsearch.value.toLowerCase()));
					
					if(searchfilter.length === 0){
						ddisplayLesson.insertAdjacentHTML('beforeend','<p style="text-align:center">No result Found</p>');
					}else{
						for(let i = 0; i < searchfilter.length; i++){

						  	dhtmlResult = '<div class="row"><div class="col-lg-8 col-md-8 col-12"><div class="embed-responsive embed-responsive-16by9"><iframe src="'+searchfilter[i].videoLink+'" frameborder="0" class="embed-responsive" allowfullscreen></iframe></div></div><div class="col-lg-4 col-md-4 col-12 info-columns order-md-1"><h4>Title: '+searchfilter[i].title+'</h4><p>Prepared by: '+searchfilter[i].owner+'</p><a href="https://drive.google.com/uc?export=download&id='+searchfilter[i].videoDownload+'" target="_blank"  class="btn-download">Download Video</a></div></div>';

							ddisplayLesson.insertAdjacentHTML('beforeend',dhtmlResult);
						}
					}
				}
			});	


			function displayVideoAndInfo() {
				for(let i = 0; i < dgradeFilterr.length; i++){

						dhtmlResult = '<div class="row"><div class="col-lg-8 col-md-8 col-12"><div class="embed-responsive embed-responsive-16by9"><iframe src="'+dgradeFilterr[i].videoLink+'" class="embed-responsive" allowfullscreen></iframe></div></div><div class="col-lg-4 col-md-4 col-12 info-columns order-md-1"><h4>Title: '+dgradeFilterr[i].title+'</h4><p>Prepared by: '+dgradeFilterr[i].owner+'</p><a href="https://drive.google.com/uc?export=download&id='+dgradeFilterr[i].videoDownload+'" target="_blank" class="btn-download">Download Video</a></div></div>';

						ddisplayLesson.insertAdjacentHTML('beforeend',dhtmlResult);
					}
			}
					

			dgrade1Btn.click();