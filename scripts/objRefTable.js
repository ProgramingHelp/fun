const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Arr,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Button.Acts.SetText,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.Arr.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Button.Acts.SetEnabled,
		C3.Plugins.Arr.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Acts.MoveAtAngle
	];
};
self.C3_JsPropNameTable = [
	{sgrsret: 0},
	{sketch: 0},
	{fhjkl: 0},
	{Text: 0},
	{Button: 0},
	{Button2: 0},
	{sketch2: 0},
	{sketch3: 0},
	{Untitled: 0},
	{Stage: 0},
	{Array: 0},
	{Text2: 0},
	{icon: 0},
	{Text3: 0},
	{Button4: 0}
];

self.InstanceType = {
	sgrsret: class extends self.ISpriteInstance {},
	sketch: class extends self.ISpriteInstance {},
	fhjkl: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	Button2: class extends self.IButtonInstance {},
	sketch2: class extends self.ISpriteInstance {},
	sketch3: class extends self.ISpriteInstance {},
	Untitled: class extends self.ISpriteInstance {},
	Array: class extends self.IArrayInstance {},
	Text2: class extends self.ITextInstance {},
	icon: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Button4: class extends self.IButtonInstance {}
}