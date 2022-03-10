class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :user, :title, :instructions, :minutes_to_complete
end
