function skillsMember(){
    var member = {
        name: 'John',
        age: 25,
        skills: ['js', 'css', 'html'],
        showSkills: function(){
            this.skills.forEach(function(skill){
                console.log(this.name + ' knows ' + skill);
            }.bind(this));
        }
    };
    member.showSkills();ret
}