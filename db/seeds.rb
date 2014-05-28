# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


posts = Post.create ([
				{ title: "Antmachine", body: "is Algonquin for 'destroyer of toilets'"}
				])

events = Event.create ([
				{ type: "", date:"01/06/2014", time: "08:00:00", duration: "", address: "2731 Kirkham Street, San Francisco, CA 94122", latitude: "37.758900", longitude: "-122.490349", cash_only?: "Yes", description: "Incredibly stuff going on sale, get it while it's hot." },
				{ type: "", date:"03/06/2014", time: "10:00:00", duration: "", address: "158A Carmel Street, San Francisco, CA 94117", latitude: "37.761088", longitude: "-122.450030", cash_only?: "Yes", description: "Once-in-a-lifetime collection of ancient artifacts." },
				{ type: "", date:"30/05/2014", time: "09:30:00", duration: "", address: "1800 Polk Street, San Francisco, CA 94109", latitude: "37.793414", longitude: "-122.421062", cash_only?: "No", description: "SALE!!!!!! CHECK OUT THESE PICS!" }  
				])
