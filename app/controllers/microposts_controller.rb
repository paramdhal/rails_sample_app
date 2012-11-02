class MicropostsController < ApplicationController
    before_filter :signed_in_user

    def create
        @micropost = current_user.microposts.build(params[:micropost])
        if @micropost.save
            flash[:sucsess] = "Micropost created!"
            redirect_to root_url
        else
            render 'static_pages/home'
            @feed_items = []
        end        
    end

    def destroy
    end
end