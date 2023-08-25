# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
#       input: array of words ['coffee', 'tea', 'juice', 'water', 'soda water']
#       output: array of words only containing a particular letter 
#               'o', ['coffee', 'soda water']
#               't', ['tea', 'water', 'soda water']
#       process: take in array
#                iterate 
#                create a method and search through the array for the matching words, .include?()
#                .each method which takes a block and the parameter of value ||
#                keyword 'if' letter is in words return only those words


# This was my first attempt at the problem, definitly not right and missing many puzzle pieces
# def part_letter (array) 
#     array.map do |value|
#         if value.include?('o')
#             []
#         elsif value.inlcude?('t')
#             []
#         else 
#             'something went wrong'
#         end
#     end 
# end

# then tried this, feels more right but still not quite there
# def part_letter(array, letter)
#     array.each do |value|
#         if value.include?(letter)
#             puts value
#         end 
#     end
# end
# part_letter(filter_letter_o)
# part_letter(filter_letter_t)
#output: wrong number of arguments (given 1, expected 2)
# part_letter': wrong number of arguments (given 1, expected 2)
 

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
#       input: a hash
#       output: an array with hash values in alphabetical order
#       process: make new hash?
#                need to join all three arrays
#                set in alpha order
#                .sort
#                google search points towards flatten method, which basically takes arrays with sub arrays joins them into one single array
#                my nemisis is knowing how exactly to put all together, where are my corner pieces?

def all_state(hash)
end

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code: 
#       input: three methods
#       output: 'The Trek bike has 2 wheels and is going 0 mph.'
#       process: creating the class
#                inialize with model, wheels, mph
#                maybe the attr_accessor instead of setting several gettor and settr methods ?
#                string interpolation

# class Bike
#     def initialize(model, wheels, current_speed)
#         @model = model 
#         @wheels = wheels
#         @current_speed = current_speed
#     end

#     def get_bike_info
#         "The #{@model} has #{@wheels} and is going#{@current_speed}mph."
#     end
# end
# bike = Bike.new('Trek', 2, 0)
# bike.get_bike_info
# p bike
# output #<Bike:0x0000000104e9f8b8 @model="Trek", @wheels=2, @current_speed=0>  ///// not what we want but better than an error(s) ?


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
#       input: 
#       output:
#       process: I know i need to add method to our class Bike
#                pedal_faster & brake
#                pedal faster needs to increase speed by given amount
#                brake should decrease by given amount
#                integer for argument
#                cannot be neg int on brake portion so must stop at 0
#                we need to set conditions for brake speed so its my favorite problem solving bff, conditionals!


# class Bike
#     def initialize(model, wheels, current_speed)
#         @model = model 
#         @wheels = wheels
#         @current_speed = current_speed
#     end
# # 
#     def pedal_faster 
#     end

#     def brake
#         if 
        
#         end
#     end

#     def get_bike_info
#         "The #{@model} has #{@wheels} and is going#{@current_speed}mph."
#     end
# end


