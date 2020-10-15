class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :description, :duration, :done, :list_id, :created_at

  private 

  def creation_date
    Task.created_at.strftime("at %l%M %b/%d")
  end
end
