{
	let gui = skyblocks.gui = dragonblocks.gui.createBox({ keylock: true });
	let headline = gui.create("h1");
	headline.align = "center";
	headline.innerHTML = "Skyblocks";
	let ul = gui.create("ul");
	for(let quest of skyblocks.quests){
		let li = ul.appendChild(document.createElement("li"));
		li.style.fontSize = "20px";
		li.innerHTML = quest.desc;
		li.style.postion = "relative";
		let questCount = li.appendChild(document.createElement("small"));
		questCount.style.position = "absolute";
		questCount.style.right = "30px";
		let checkbox = li.appendChild(document.createElement("input"));
		checkbox.type = "checkbox";
		checkbox.style.position = "absolute";
		checkbox.style.right = "5px";
		checkbox.addEventListener("input", _ => { gui.getDisplay().dispatchEvent(new Event("update")) });
		gui.getDisplay().addEventListener("update", _ => {
			checkbox.checked = (dragonblocks.player.meta.skyblocksQuests[quest.name] >= quest.count);
			questCount.innerHTML = Math.min(dragonblocks.player.meta.skyblocksQuests[quest.name], quest.count) + "/" + quest.count;
		});
	}
	dragonblocks.menu.addButton("Skyblocks", _ => { gui.open() });
}
